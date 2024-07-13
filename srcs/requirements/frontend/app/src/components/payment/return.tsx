import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import apiAdress from '@utils/apiAdress';

function Return() {
	const [customerEmail, setCustomerEmail] = useState('');
	const router = useRouter();

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const sessionId = urlParams.get('session_id');

		fetch(apiAdress + "/pay/session-status")
			.then((res) => res.json())
			.then((data) => {
			setCustomerEmail(data.customer_email);
		  });
	}, []);

	if (status === 'open') {
		router.push('/pricing/checkout')
	}

	if (status === 'complete') {
	return (
		<section id="success">
			<p>
			  We appreciate your business! A confirmation email will be sent to {customerEmail}.
			  If you have any questions, please email 
				<a href="mailto:contact@profilefinder.com">
					contact@profilefinder.com
				</a>.
			</p>
		</section>
	)
	}

	return null;
}

export default Return;
