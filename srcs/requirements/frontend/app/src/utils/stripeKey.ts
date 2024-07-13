const stripeKey : string = (process.env.STRIPE_KEY != undefined) ? process.env.STRIPE_KEY : "";
export default stripeKey;
