// helpers/lazyLoading.ts
import * as views from '@/views';

// CORRIGIR AQUI
export function lazyLoading(viewName: string) {
	const component = views[`${viewName}View`];

	if (!component) {
		throw new Error(`View not found: ${viewName}`);
	}

	return component;
}
