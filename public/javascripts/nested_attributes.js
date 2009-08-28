/*
 * This is an onClick handler for adding new nested models to a form.
 * 
 * For example, you might have a link like this:
 *
 *   <a href="#comment" rel="comments">Add a comment</a>
 *
 * If you attach addNestedItem as the click handler for this link, it will:
 *
 * 1. Look for a JavaScript variable named "comment" (taken from the href),
 *    and use its contents as the template for the HTML to be added.
 *
 * 2. Replace all the occurrences of NEW_RECORD in the template with a
 *    generated ID (see the generate_template helper.)
 *
 * 3. Append the HTML to the element with id "comments" (taken from the rel).
 */
function addNestedItem(event) { 
  var element = event.element();
  var template = eval(element.href.replace(/.*#/, ''));
  template = template.replace(/NEW_RECORD/g, new Date().getTime());
  $(element.rel).insert({ bottom: template });
  event.stop();
}

/*
 * This is an onClick handler for removing nested models from a form.
 *
 * For example, you might have a link like this:
 *
 *   <a href="#comment">Remove a comment</a>
 *
 * If you attach addNestedItem as the click handler for this link, it will:
 *
 * 1. Look for a hidden input field immediately before the link (this should
 *    be the _delete attribute, as described in Rails' fields_for docs) and
 *    set it to 1.
 *
 * 2. Either hide the enclosing ".comment" element (class name taken from
 *    the href), or remove it if it's a new record.
 */
function removeNestedItem(event) {
  var element = event.element();
  var target  = element.up(element.href.replace(/.*#/, '.'));
  var deleteFlag = element.previous("input.delete_flag");
  if (deleteFlag) {
    target.hide();
    deleteFlag.value = 1;
  }
  else {
    target.remove();
  }
  event.stop();
}

