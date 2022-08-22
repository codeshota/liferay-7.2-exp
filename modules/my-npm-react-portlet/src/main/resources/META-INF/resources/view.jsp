<%@ include file="/init.jsp" %>

<div id="<portlet:namespace />-root"></div>

<aui:script require="<%= mainRequire %>">
	main.default({
		elementId: '<portlet:namespace />-root', 
		data: 'hello'
	});
</aui:script>