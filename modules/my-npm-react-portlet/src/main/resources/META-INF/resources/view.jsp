<%@ include file="/init.jsp" %>

<div id="<portlet:namespace />-root"></div>

<aui:script require="<%= mainRequire %>">
	const tags = [
		{name: 'one', count: 3},
		{name: 'two', count: 1},
		{name: 'three', count: 1},
		{name: 'four', count: 1},
	];

	main.default({
		elementId: '<portlet:namespace />-root', 
		data: tags
	});
</aui:script>