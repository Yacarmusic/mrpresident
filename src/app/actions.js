"use server";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function markLessonCompleted(lessonId) {
    const { userId } = await auth();
    if (!userId) return { success: false, error: "Unauthorized" };

    try {
        const client = await clerkClient();
        const user = await client.users.getUser(userId);

        // Get existing progress from unsafeMetadata (client-readable) or publicMetadata
        // unsafeMetadata is faster for client updates, but less secure. 
        // publicMetadata is read-only for client, writable by server. Best fit.
        const currentProgress = user.publicMetadata.progress || {};

        const newProgress = {
            ...currentProgress,
            [lessonId]: true
        };

        await client.users.updateUserMetadata(userId, {
            publicMetadata: {
                progress: newProgress
            }
        });

        return { success: true };
    } catch (error) {
        console.error("Error updating progress:", error);
        return { success: false, error: error.message };
    }
}
