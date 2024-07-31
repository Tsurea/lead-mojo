function Benefit({ page }: any) {
	const headerBenefit : string = "text-xl font-semibold mb-2";
	const blockBenefit : string = "h-full py-4 md:py-0 md:h-52 lg:h-44 xl:h-36 px-4 w-full md:w-1/2";
	const description : string = "text-slate-600";

	return (
			<div className="bg-white py-11">
				<div className="flex flex-col justify-center items-center mx-auto py-auto">
					<h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
						{page["title"]}
					</h2>
					<div className="flex justify-center items-center">
						<div className="flex flex-col md:flex-row flex-wrap md:w-[750px] lg:w-[970px] xl:w-[1170px] justify-between md:max-screen-md items-center">
							<div className={blockBenefit}>
								<svg width="32px" height="32px" viewBox="0 0 24 24" className="mb-4" fill="#ffffff">
								  <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" />
								  <path d="M18.4204,2.79688 L18.8059711,2.85295405 C19.4057917,2.94806843 20.0777273,3.10685818 20.4914,3.52049 C20.9049909,3.93413 21.0638,4.6060395 21.1589228,5.20585718 L21.215,5.59143 L21.215,5.59143 C21.3408,6.50155 21.3737,7.69413 21.159,9.01795 C20.7351,11.631 19.3441,14.7487 15.8506,17.1627 C15.833175,17.33965 15.8309625,17.5191562 15.8343234,17.6997219 L15.8514875,18.2431 C15.861225,18.605475 15.8547,18.9661 15.7548,19.313 C15.56464,19.97332 14.888464,20.407976 14.2558336,20.7201872 L13.9455989,20.8665669 L13.9455989,20.8665669 L13.545635,21.0430858 L13.545635,21.0430858 L13.2717214,21.1538822 C12.5649515,21.4238828 11.7127895,21.6119105 11.154,21.0532 C10.9005429,20.7997429 10.7836653,20.4557714 10.6896367,20.111716 L10.644,19.9401 C10.4849,19.3334 10.3028,18.7309 10.0768,18.1456 C10.015,18.2208 9.94895,18.2936 9.87872,18.3639 C9.3344075,18.908175 8.59528437,19.1823375 7.85566625,19.394625 L7.36464657,19.5292685 L7.36464657,19.5292685 L6.87439635,19.6599076 L6.87439635,19.6599076 L6.39740928,19.7784902 L6.39740928,19.7784902 L5.96538922,19.8780687 L5.96538922,19.8780687 L5.44837987,19.9882318 L5.44837987,19.9882318 L5.1252,20.0516 L5.1252,20.0516 C4.83683,20.1054 4.48846,20.0353 4.22654,19.7734 C3.96462,19.5115 3.89458,19.1631 3.94831,18.8747 L4.05896552,18.3240328 L4.05896552,18.3240328 L4.18762684,17.7458685 L4.18762684,17.7458685 L4.31150404,17.2368012 L4.31150404,17.2368012 L4.53657769,16.3905727 C4.76003833,15.5712833 5.03128833,14.7260333 5.63608,14.1212 L5.73567,14.026 L5.73567,14.026 L4.9726775,13.7515375 L4.9726775,13.7515375 L4.20589,13.4881 C3.75736,13.34 3.28472,13.1839 2.95865,12.8578 C2.36266684,12.2618421 2.61634839,11.3320205 2.91287999,10.6008928 L3.07888,10.2141 L3.07888,10.2141 L3.21613148,9.91300327 C3.53302244,9.2394864 3.983484,8.46308133 4.6989,8.25704 C5.045755,8.15715 5.4063725,8.15063 5.76875125,8.16037375 L6.31214016,8.17754891 C6.49271,8.18091437 6.67222,8.1787075 6.84917,8.16129 C9.26314,4.66772 12.3808,3.27676 14.9939,2.8529 C16.3177,2.63817 17.5103,2.67102 18.4204,2.79688 Z M15.3141,4.8271 C13.1157,5.18369 10.4451,6.36124 8.36074,9.49569 C8.10825,9.87536 7.68105,10.0575 7.24552,10.1263 C6.99978,10.16506 6.751856,10.175628 6.50314768,10.1760648 L5.75606944,10.1650424 C5.6316308,10.16416 5.507346,10.16526 5.38339,10.1706 C5.07949,10.5749 4.86721,11.0551 4.70779,11.5323 L6.20788495,12.0766841 L6.20788495,12.0766841 L6.82508614,12.3098919 C7.95254302,12.7519582 9.04447,13.2867733 9.88476,14.1271 C11.2999,15.5422 12.0193,17.3932 12.5393,19.2837 C12.9948,19.1243 13.4534,18.92 13.8412,18.6285 L13.8467776,18.2556376 L13.8467776,18.2556376 L13.8355552,17.5099512 C13.835952,17.261596 13.84656,17.01358 13.8856,16.7663 C13.9543,16.3308 14.1365,15.9036 14.5162,15.6511 C17.6506,13.5667 18.8282,10.8961 19.1848,8.69773 C19.3648,7.58788 19.3349,6.59643 19.2338,5.86539 C19.179,5.46915 19.1028,5.15678 19.0414,4.97048 C18.8551,4.90906 18.5427,4.83282 18.1465,4.77802 C17.4154,4.67693 16.424,4.64708 15.3141,4.8271 Z M7.05029,15.5354 C6.700444,15.95757 6.5367784,16.513118 6.40564292,17.0634034 L6.29762396,17.5305542 C6.279754,17.60712 6.261652,17.68277 6.24287,17.7571 L6.93673688,17.5943053 C7.4872026,17.463168 8.042976,17.29948 8.46495,16.9492 C8.85547,16.5587 8.85503,15.926 8.4645,15.5354 C8.07398,15.1449 7.44081,15.1449 7.05029,15.5354 Z M12.7072,8.46441 C13.4882,7.68336 14.7546,7.68336 15.5356,8.46441 C16.3167,9.24546 16.3167,10.5118 15.5356,11.2928 C14.7546,12.0739 13.4882,12.0739 12.7072,11.2928 C11.9261,10.5118 11.9261,9.24546 12.7072,8.46441 Z" fill="#408ACE" />
								</svg>
								<h3 className={headerBenefit}>
									{page["conversion_title"]}
								</h3>
								<p className={description}>
									{page["conversion_description"]}
								</p>
							</div>
							<div className={blockBenefit}>
								<svg width="32px" height="32px" className="mb-4" fill="#ffffff" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
									<path d="M8,8H5A3,3,0,0,1,5,2H8a2.9938,2.9938,0,0,1,2.84111,2.08154A4.48267,4.48267,0,0,1,14.44332,7.833L15.30464,14h6.69529v6H14.12361L12.46285,8.11035a2.46006,2.46006,0,0,0-1.6878-1.97967A3.00169,3.00169,0,0,1,8,8ZM47.99984,40a.99943.99943,0,0,1-1,1H45.23807a4.48671,4.48671,0,0,1-7.2382,5.29352A4.48728,4.48728,0,0,1,30.76168,41H26.23813a4.4867,4.4867,0,0,1-7.23819,5.29352,4.48037,4.48037,0,0,1-7.09952-5.46643A3.98929,3.98929,0,0,1,13,33h2.93957l-.55872-4h6.61912v4h2V29h6v4h2V29h6v4h2V29h5.50761l-.77228,3.62109A3.03255,3.03255,0,0,1,41.77525,35H13a2,2,0,0,0,0,4H46.99984A.99943.99943,0,0,1,47.99984,40Zm-12,3.5a1.5,1.5,0,1,0-1.5,1.5A1.50164,1.50164,0,0,0,35.99988,43.5Zm7,0a1.5,1.5,0,1,0-1.5,1.5A1.50164,1.50164,0,0,0,42.99986,43.5Zm-25.99991,0A1.5,1.5,0,1,0,15.5,45,1.50164,1.50164,0,0,0,16.99995,43.5Zm7,0a1.5,1.5,0,1,0-1.5,1.5A1.50164,1.50164,0,0,0,23.99992,43.5Zm6.98045-33.30371A1.00025,1.00025,0,0,0,30.287,9.042l-10-3a.99986.99986,0,0,0-1.25683.71582L17.71967,12h12.9Zm1.96093.39355L32.65919,12h5.34068V3a.99942.99942,0,0,0-1-1h-12a.99943.99943,0,0,0-1,1V5.06757L30.86123,7.126A2.98711,2.98711,0,0,1,32.9413,10.58984Zm12.05855,1.41162V6a.99943.99943,0,0,0-1-1h-4v7h4.97361ZM23.99992,27h6V22h-6Zm6-13h-6v6h6Zm-8,13V22H14.403l.69843,5ZM37.99987,14h-6v6h6Zm9.93454,3.62012a2.97173,2.97173,0,0,0-.60156-2.498A3.02179,3.02179,0,0,0,44.97348,14H39.99987v6h7.427ZM47.00033,22H39.99987v5H45.934ZM31.99989,27h6V22h-6Z" fill="#408ACE"/>
								</svg>
								<h3 className={headerBenefit}>
									{page["commission_title"]}
								</h3>
								<p className={description}>
									{page["commission_description"]}
								</p>
							</div>
							<div className={blockBenefit}>
								<svg width="32px" height="32px" className="mb-4" viewBox="0 0 28 28" fill="#ffffff">
									<path d="M17.25,18 C18.4926407,18 19.5,19.0073593 19.5,20.25 L19.5,21.7519766 L19.4921156,21.8604403 C19.1813607,23.9866441 17.2715225,25.0090369 14.0667905,25.0090369 C10.8736123,25.0090369 8.93330141,23.9983408 8.51446278,21.8965776 L8.5,21.75 L8.5,20.25 C8.5,19.0073593 9.50735931,18 10.75,18 L17.25,18 Z M17.25,19.5 L10.75,19.5 C10.3357864,19.5 10,19.8357864 10,20.25 L10,21.670373 C10.2797902,22.870787 11.550626,23.5090369 14.0667905,23.5090369 C16.582858,23.5090369 17.7966388,22.8777026 18,21.6931543 L18,20.25 C18,19.8357864 17.6642136,19.5 17.25,19.5 Z M18.2435553,11.9989081 L23.75,12 C24.9926407,12 26,13.0073593 26,14.25 L26,15.7519766 L25.9921156,15.8604403 C25.6813607,17.9866441 23.7715225,19.0090369 20.5667905,19.0090369 L20.2519278,19.0056708 L20.2519278,19.0056708 C19.9568992,18.2920884 19.4151086,17.7078172 18.7333573,17.3574924 C19.2481703,17.4584023 19.8580822,17.5090369 20.5667905,17.5090369 C23.082858,17.5090369 24.2966388,16.8777026 24.5,15.6931543 L24.5,14.25 C24.5,13.8357864 24.1642136,13.5 23.75,13.5 L18.5,13.5 C18.5,12.9736388 18.4096286,12.468385 18.2435553,11.9989081 Z M4.25,12 L9.75644465,11.9989081 C9.61805027,12.3901389 9.53222663,12.8062147 9.50746303,13.2386463 L9.5,13.5 L4.25,13.5 C3.83578644,13.5 3.5,13.8357864 3.5,14.25 L3.5,15.670373 C3.77979024,16.870787 5.05062598,17.5090369 7.5667905,17.5090369 C8.18886171,17.5090369 8.73132757,17.4704451 9.1985991,17.3944422 C8.5478391,17.7478373 8.03195873,18.3174175 7.74634871,19.0065739 L7.5667905,19.0090369 C4.37361228,19.0090369 2.43330141,17.9983408 2.01446278,15.8965776 L2,15.75 L2,14.25 C2,13.0073593 3.00735931,12 4.25,12 Z M14,10 C15.9329966,10 17.5,11.5670034 17.5,13.5 C17.5,15.4329966 15.9329966,17 14,17 C12.0670034,17 10.5,15.4329966 10.5,13.5 C10.5,11.5670034 12.0670034,10 14,10 Z M14,11.5 C12.8954305,11.5 12,12.3954305 12,13.5 C12,14.6045695 12.8954305,15.5 14,15.5 C15.1045695,15.5 16,14.6045695 16,13.5 C16,12.3954305 15.1045695,11.5 14,11.5 Z M20.5,4 C22.4329966,4 24,5.56700338 24,7.5 C24,9.43299662 22.4329966,11 20.5,11 C18.5670034,11 17,9.43299662 17,7.5 C17,5.56700338 18.5670034,4 20.5,4 Z M7.5,4 C9.43299662,4 11,5.56700338 11,7.5 C11,9.43299662 9.43299662,11 7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 Z M20.5,5.5 C19.3954305,5.5 18.5,6.3954305 18.5,7.5 C18.5,8.6045695 19.3954305,9.5 20.5,9.5 C21.6045695,9.5 22.5,8.6045695 22.5,7.5 C22.5,6.3954305 21.6045695,5.5 20.5,5.5 Z M7.5,5.5 C6.3954305,5.5 5.5,6.3954305 5.5,7.5 C5.5,8.6045695 6.3954305,9.5 7.5,9.5 C8.6045695,9.5 9.5,8.6045695 9.5,7.5 C9.5,6.3954305 8.6045695,5.5 7.5,5.5 Z" fill="#408ACE"/>
								</svg>
								<h3 className={headerBenefit}>
									{page["manager_title"]}
								</h3>
								<p className={description}>
									{page["manager_description"]}
								</p>
							</div>
							<div className={blockBenefit}>
								<svg viewBox="0 0 24 24" width="32px" height="32px" className="mb-4" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M12 21C9.4651 18.3899 8 15.3051 8 12C8 8.69488 9.4651 5.61005 12 3M12 21C14.5349 18.3899 16 15.3051 16 12C16 8.69488 14.5349 5.61005 12 3M20 9H4M20 15H4" stroke="#408ACE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
								<h3 className={headerBenefit}>
									{page["everywhere_title"]}
								</h3>
								<p className={description}>
									{page["everywhere_description"]}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
}

export default Benefit;