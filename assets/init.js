var theme = {
	breakpoints: {
		medium: 750,
		large: 990,
		widescreen: 1400
	},
	strings: {
		addToCart: "Add to cart",
		soldOut: "Sold out",
		unavailable: "Unavailable",
		regularPrice: "Regular price",
		salePrice: "Sale price",
		sale: "Sale",
		fromLowestPrice: "from [price]",
		vendor: "Vendor",
		showMore: "Show More",
		showLess: "Show Less",
		searchFor: "Search for",
		addressError: "Error looking up that address",
		addressNoResults: "No results for that address",
		addressQueryLimit: "You have exceeded the Google API usage limit. Consider upgrading to a \u003ca href=\"https:\/\/developers.google.com\/maps\/premium\/usage-limits\"\u003ePremium Plan\u003c\/a\u003e.",
		authError: "There was a problem authenticating your Google Maps account.",
		newWindow: "Opens in a new window.",
		external: "Opens external website.",
		newWindowExternal: "Opens external website in a new window.",
		removeLabel: "Remove [product]",
		update: "Update",
		quantity: "Quantity",
		discountedTotal: "Discounted total",
		regularTotal: "Regular total",
		priceColumn: "See Price column for discount details.",
		quantityMinimumMessage: "Quantity must be 1 or more",
		cartError: "There was an error while updating your cart. Please try again.",
		removedItemMessage: "Removed \u003cspan class=\"cart__removed-product-details\"\u003e([quantity]) [link]\u003c\/span\u003e from your cart.",
		unitPrice: "Unit price",
		unitPriceSeparator: "per",
		oneCartCount: "1 item",
		otherCartCount: "[count] items",
		quantityLabel: "Quantity: [count]",
		products: "Products",
		loading: "Loading",
		number_of_results: "[result_number] of [results_count]",
		number_of_results_found: "[results_count] results found",
		one_result_found: "1 result found"
	},
	moneyFormat: null,
	moneyFormatWithCurrency: null,
	settings: {
		predictiveSearchEnabled: true,
		predictiveSearchShowPrice: false,
		predictiveSearchShowVendor: false
	}
}

document.documentElement.className = document.documentElement.className.replace('no-js', 'js');