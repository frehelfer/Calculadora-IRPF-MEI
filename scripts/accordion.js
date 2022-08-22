const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((accordionHeader) => {
	accordionHeader.addEventListener('click', () => {
		const input = accordionHeader.nextElementSibling;
		const accordionContent = input.nextElementSibling;
		const height = accordionContent.scrollHeight;

		accordionHeader.classList.toggle('active-header');

		if (accordionHeader.classList.contains('active-header')) {
			accordionContent.style.maxHeight = `${height}px`;
		} else {
			accordionContent.style.maxHeight = '0px';
		}
	});
});
