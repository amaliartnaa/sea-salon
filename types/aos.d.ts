declare module 'aos' {
	interface AosOptions {
		duration?: number;
		offset?: number;
		delay?: number;
		easing?: string;
		once?: boolean;
		mirror?: boolean;
		anchorPlacement?: string;
	}

	function init(options?: AosOptions): void;
	function refresh(): void;
	function refreshHard(): void;

	export { init, refresh, refreshHard };
}
