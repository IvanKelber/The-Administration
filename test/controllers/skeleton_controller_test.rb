require 'test_helper'

class SkeletonControllerTest < ActionDispatch::IntegrationTest

  def setup
    @base_title = Administration::SITE_NAME
    @user = users(:glick)
  end

  test "should get root" do
    get root_path
    assert_response :success
    assert_select "title", "#{@base_title}"
  end

  test "should get about" do
    get about_path
    assert_response :success
    assert_select "title", "About | #{@base_title}"
  end

  test "should get rules" do
    get rules_path
    assert_response :success
    assert_select "title", "Rules | #{@base_title}"
  end

  test "should get media only if logged in" do
    get media_path
    assert_redirected_to login_url

    log_in_as @user
    get media_path
    assert_response :success
    assert_select "title", "Media | #{@base_title}"
  end

end
