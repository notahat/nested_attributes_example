module NestedAttributesHelper

  # Renders a partial to generate a HTML template for a nested model in
  # a form. Use this with the addNestedItem JavaScript function to
  # support dynamically adding nested models.
  #
  # For example, given a form builder for a Post, you could call:
  #
  #   generate_nested_model_template(form, :comments)
  #
  # to get a template for a new comment nested model.
  def generate_nested_model_template(form_builder, method, options = {})
    options[:object]  ||= form_builder.object.class.reflect_on_association(method).klass.new
    options[:partial] ||= method.to_s.singularize
    options[:form_builder_local] ||= :fields

    form_builder.fields_for(method, options[:object], :child_index => "NEW_RECORD") do |fields|
      render(:partial => options[:partial], :locals => { options[:form_builder_local] => fields })
    end
  end

  # Render a hidden field to hold the delete flag for a nested model.
  def delete_flag(fields)
    fields.hidden_field(:_delete, :class => "delete_flag") unless fields.object.new_record?
  end

end

