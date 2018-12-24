var postsButton = $("#btnPosts");
var taggedButton = $("#btnTagged");
var followButton = $("#btnFollow");

postsButton.click(function() {
	$(this).addClass("selected");
	$(this).removeClass("unselected");
	taggedButton.addClass("unselected");
});

taggedButton.click(function() {
	$(this).addClass("selected");
	$(this).removeClass("unselected");
	postsButton.addClass("unselected");
});

followButton.click(function() {
	$(this).addClass("unfollow");
	$(this).removeClass("follow");
});