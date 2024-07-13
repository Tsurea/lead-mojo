import { loadStripe } from '@stripe/stripe-js';
import stripeKey from '@utils/stripeKey';
import apiAdress from '@utils/apiAdress';
import Cookies from 'js-cookie';

import {
		EmbeddedCheckoutProvider,
		EmbeddedCheckout
	} from '@stripe/react-stripe-js';

import { useCallback } from 'react';

type CheckoutFormType = {
	page: any;
}

function CheckoutForm({ page }: CheckoutFormType) {
	const stripePromise = loadStripe(stripeKey);
	const fetchClientSecret = useCallback(() => {
		// Create a Checkout Session
		return fetch(apiAdress + "/pay/create-checkout-session", {
			method: "POST",
			headers: {
				'Authorization': `${Cookies.get('access_token')}`
			}
		})
		.then(function (res: Response) {
			if (!res.ok)
				throw new Error("Error");
			return res.json();
		})
		.then(function (data) {
			console.log(data)
			return data.clientSecret
		})
		.catch(function (error) {
			console.error(error)
		})
	}, []);
	const options = {fetchClientSecret};
	return (
		<div>
			<EmbeddedCheckoutProvider
				stripe={stripePromise}
				options={options}
			>
				<EmbeddedCheckout />
			</EmbeddedCheckoutProvider>
		</div>
	)
}

export default CheckoutForm;
