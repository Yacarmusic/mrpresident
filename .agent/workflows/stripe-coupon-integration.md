# Stripe Coupon Integration - Lessons Learned

## Problem: `promotionCodes.list()` returns coupon as null/undefined

### Root Cause
When using `stripe.promotionCodes.list()`, the `coupon` field may be returned in different formats depending on the Stripe API version and whether `expand` is used:

1. **As a string ID** (not expanded) - `promoData.coupon = "coupon_abc123"`
2. **As an object** (when expanded) - `promoData.coupon = { id: "coupon_abc123", percent_off: 20, ... }`
3. **Nested under promotion** (newer API) - `promoData.promotion.coupon`

### Solution
Always check the type of the coupon value and fetch the full object if it's just a string ID:

```javascript
let rawCoupon = promoData.coupon || promoData.promotion?.coupon;

// If coupon is a string (just the ID), fetch the full coupon object
if (typeof rawCoupon === 'string') {
    coupon = await stripe.coupons.retrieve(rawCoupon);
} else if (rawCoupon && typeof rawCoupon === 'object') {
    coupon = rawCoupon;
}
```

### Key Points
- Always use `expand: ['data.coupon']` in the list request
- Check `typeof rawCoupon` to determine if you have an ID or object
- If string, use `stripe.coupons.retrieve(rawCoupon)` to get full details
- Coupon properties: `percent_off` (number 0-100) or `amount_off` (in cents!)
