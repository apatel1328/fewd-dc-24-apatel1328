jQuery(document).ready(function() {
	jQuery('#title').on('click',function(){
		$('#title').jAnimateSequence(['bounce', 'tada', 'wobble']);
	})
});