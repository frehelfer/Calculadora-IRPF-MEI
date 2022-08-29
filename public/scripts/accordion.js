const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((accordionHeader) => {
	accordionHeader.addEventListener('click', () => {
		const accordionContent = accordionHeader.nextElementSibling;
		const accordionIcon = accordionHeader.firstElementChild;
		const height = accordionContent.scrollHeight;

		accordionHeader.classList.toggle('active-header');

		if (accordionHeader.classList.contains('active-header')) {
			accordionContent.style.maxHeight = `${height}px`;
			accordionIcon.style.content = 'url(/images/expand_less_FILL0_wght400_GRAD200_opsz48.svg)';
		} else {
			accordionContent.style.maxHeight = '0px';
			accordionIcon.style.content = 'url(/images/expand_more_FILL0_wght400_GRAD200_opsz48.svg)';
		}
	});
});
