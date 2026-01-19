const { createClerkClient } = require('@clerk/backend');
const fs = require('fs');
const path = require('path');

// 1. Lee la clave secreta desde el entorno o pégala aquí (NO SUBIR A GITHUB)
const secretKey = process.env.CLERK_SECRET_KEY;

if (!secretKey) {
    console.error("❌ ERROR: Falta la variable CLERK_SECRET_KEY.");
    console.error("Ejecuta: CLERK_SECRET_KEY=sk_test_... node scripts/import_users.js");
    process.exit(1);
}

const clerkClient = createClerkClient({ secretKey });

async function importUsers() {
    const csvPath = path.join(__dirname, 'unified_customers.csv');

    if (!fs.existsSync(csvPath)) {
        console.error("❌ ERROR: No encuentro el archivo 'unified_customers.csv' en la carpeta scripts/.");
        process.exit(1);
    }

    const content = fs.readFileSync(csvPath, 'utf-8');

    // Parseo línea por línea para el formato: Email,Name
    const lines = content.split('\n');
    const emails = lines
        .slice(1) // Saltamos la cabecera (Email,Name)
        .map(line => line.split(',')[0].trim()) // Tomamos lo que hay antes de la primera coma
        .filter(email => email.includes('@') && email.length > 5); // Filtramos vacíos o inválidos

    console.log(`📋 Encontrados ${emails.length} correos. Empezando importación...\n`);

    for (const email of emails) {
        try {
            await clerkClient.invitations.createInvitation({
                emailAddress: email,
                redirectUrl: 'https://www.mrpresident.es/sign-up',
                ignoreExisting: true
            });
            console.log(`✅ Invitado: ${email}`);
        } catch (error) {
            console.error(`❌ Error con ${email}:`, error.errors?.[0]?.message || error.message);
        }
        // Pausa más larga (2s) para evitar error "Too many requests"
        await new Promise(r => setTimeout(r, 2000));
    }

    console.log("\n✨ Proceso finalizado.");
}

importUsers();
