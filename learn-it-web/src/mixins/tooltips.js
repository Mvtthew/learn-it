import { Tooltip } from "bootstrap";

export const tooltipsMixin = {
	data() {
		return {
			tooltipTriggerList: [],
		};
	},
	methods: {
		init() {
			setTimeout(() => {
				this.tooltipTriggerList = [];
				[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach((tooltipTriggerEl) => {
					const tooltip = new Tooltip(tooltipTriggerEl);
					this.tooltipTriggerList = [...this.tooltipTriggerList, tooltip];
				});
			}, 500);
		},
		hideAll() {
			if (this.tooltipTriggerList) this.tooltipTriggerList.forEach((t) => t.hide());
		},
	},
};
