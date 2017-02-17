require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(name: "Example User", email: "user@example.com",password:"password!1",password_confirmation:"password!1")
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "name should be present" do
  @user.name = "     "
    assert_not @user.valid?
  end
end
