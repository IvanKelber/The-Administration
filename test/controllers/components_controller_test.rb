require 'test_helper'

class ComponentsControllerTest < ActionDispatch::IntegrationTest

  def setup
    @glick = users(:glick)
    @admin = users(:admin)
  end

  test "non-admin can't get components" do
    log_in_as @glick
    get components_path
    assert_redirected_to root_path
    get new_component_path
    assert_redirected_to root_path
  end

  test "admin can get components" do
    log_in_as @admin
    get components_path
    assert_response :success
    get new_component_path
    assert_response :success
  end

  test "admin can create components" do
    log_in_as @admin
    get components_path
    component = create_component @admin
    assert component
  end

  test "user can't create components" do
    log_in_as @glick
    get components_path
    component = create_component @glick
    assert_not component
  end

end
