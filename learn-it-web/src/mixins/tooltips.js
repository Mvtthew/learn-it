import { Tooltip } from "bootstrap";

export const tooltipsMixin = {
	methods: {
		initTooltips() {
			setTimeout(() => {
				var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
				tooltipTriggerList.map(function(tooltipTriggerEl) {
					return new Tooltip(tooltipTriggerEl);
				});
			}, 500);
		},
	},
};
