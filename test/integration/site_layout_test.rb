require 'test_helper'

class SiteLayoutTest < ActionDispatch::IntegrationTest

  def setup
    @user = users(:glick)
    @admin = users(:admin)
  end

  test "layout links" do
    get root_path
    assert_template 'skeleton/home'
    assert_select "a[href=?]", root_path, count: 2
    assert_select "a[href=?]", rules_path
    assert_select "a[href=?]", about_path
    assert_select "a[href=?]", login_path

  end

  test "layout links when logged in as user" do
    log_in_as(@user)
    get root_path
    assert_template 'skeleton/home'
    assert_select "a[href=?]", root_path, count: 2
    assert_select "a[href=?]", rules_path
    assert_select "a[href=?]", about_path
    assert_select "a[href=?]", media_path
    assert_select "a[href=?]", logout_path
    assert_select "a[href=?]", user_path(@user)
    assert_select "a[href=?]", edit_user_path(@user)



  end

  test "layout links when logged in as admin" do
    log_in_as(@admin)
    get root_path
    assert_template 'skeleton/home'
    assert_select "a[href=?]", root_path, count: 2
    assert_select "a[href=?]", rules_path
    assert_select "a[href=?]", about_path
    assert_select "a[href=?]", media_path
    assert_select "a[href=?]", components_path
    assert_select "a[href=?]", logout_path
    assert_select "a[href=?]", user_path(@admin)
    assert_select "a[href=?]", edit_user_path(@admin)

  end
end
