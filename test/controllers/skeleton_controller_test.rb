require 'test_helper'

class SkeletonControllerTest < ActionDispatch::IntegrationTest
  test "should get media" do
    get skeleton_media_url
    assert_response :success
  end

  test "should get rules" do
    get skeleton_rules_url
    assert_response :success
  end

  test "should get about" do
    get skeleton_about_url
    assert_response :success
  end

  test "should get contact" do
    get skeleton_contact_url
    assert_response :success
  end

end
