require 'test_helper'

class SkeletonControllerTest < ActionDispatch::IntegrationTest

  test "should get root" do
    get root_path
    assert_response :success
  end

  test "should get media" do
    get media_path
    assert_response :success
  end

  test "should get rules" do
    get rules_path
    assert_response :success
  end

  test "should get about" do
    get about_path
    assert_response :success
  end

  test "should get contact" do
    get contact_path
    assert_response :success
  end

end
