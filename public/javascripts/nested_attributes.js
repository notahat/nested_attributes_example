/*
 * Returns a function that can be used as a click handler for adding
 * nested models to a form. For example:
 *
 *   $("add_task_link").observe("click", addNestedItem("tasks", taskTemplate));
 * 
 * The returned click handler will:
 * 
 * 1. Replace all the occurrences of NEW_RECORD in the template with a
 *    generated ID (see the generate_template helper.)
 *
 * 2. Insert the template in the bottom of the given container.
 *
 * 3. Set the focus to the first form element inside the new item.
 */
function addNestedItem(container, template) { 
  container = $(container);
  return function(event) {
    var newItem = template.replace(/NEW_RECORD/g, new Date().getTime());
    container.insert({ bottom: newItem });

    var newElement = container.childElements().last();
    newElement.down("input,select,textarea").focus();

    event.stop();
  };
}

/*
 * Returns a function that can be used as a click handler for removing
 * nested models from a form. For example:
 *
 *   $("remove_task_link").observe("click", removeNestedItem("task"));
 *
 * The returned click handler will:
 *
 * 1. Look for the hidden _delete flag immediately before the clicked link
 *    (as described in Rails' fields_for docs) and set it to 1.
 *
 * 2. Find the enclosing element with a CSS class of itemClass, and either
 *    hide it, or remove it if it's a new record.
 */
function removeNestedItem(itemClass) {
  return function(event) {
    var element = event.element();
    var target  = element.up("." + itemClass);
    var deleteFlag = element.previous("input.delete_flag");
    if (deleteFlag) {
      target.hide();
      deleteFlag.value = 1;
    }
    else {
      target.remove();
    }
    event.stop();
  };
}

