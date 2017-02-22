require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = users(:glick)
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "name should be present" do
  @user.name = "     "
    assert_not @user.valid?
  end

  test "email presence validity" do
    @user.email = "     "
    assert !@user.valid?
    @user.email = ""
    assert !@user.valid?
  end

  test "name should not be too long" do
    @user.name = "a" * 51
    assert_not @user.valid?
  end

  test "email should not be too long" do
    @user.email = "a" * 244 + "@example.com"
    assert_not @user.valid?
  end

  test "valid email should be valid" do
    valid_emails = ["foo@bar.com","FoO@bar.org","foo123@cc.c",
                    "A123VDWDW@something.somethingelse.com"]
    valid_emails.each do |email|
      @user.email = email
      assert @user.valid?
    end
  end

  test "invalid email should not be valid" do
    invalid_emails = ["foo@@bar.com","FoO@bar_org","foo123@ccc",
                    "A123VDWDW","@something.com"]
    invalid_emails.each do |email|
      @user.email = email
      assert !@user.valid?
    end
  end

  test "valid password should be valid" do
    valid_passwords = ["password1","yourdog1","1234567a",
                    "ThIsIsAlOnGaNdAnNoYiNgPaSsWoRdWiThAnUmBeRaTtHeEnD1"]
    valid_passwords.each do |password|
      @user.password = password
      @user.password_confirmation = password
      assert @user.valid?
    end
  end

  test "invalid password should be invalid" do
    invalid_passwords = ["password","short","1234567",
                    "ThIsIsAlOnGaNdAnNoYiNgPaSsWoRdWiThAnUmBeRaTtHeEnD",""]
    invalid_passwords.each do |password|
      @user.password = password
      @user.password_confirmation = password
      assert !@user.valid?
    end
    @user.password="password1"
    @user.password_confirmation="password2"
    assert !@user.valid?
  end

  test "email addresses should be unique" do
    duplicate_user = @user.dup
    duplicate_user.email = @user.email.upcase
    @user.save
    assert_not duplicate_user.valid?
  end

  test "email addresses should be saved as lower-case" do
    mixed_case_email = "Foo@ExAMPle.CoM"
    @user.email = mixed_case_email
    @user.save
    assert_equal mixed_case_email.downcase, @user.reload.email
  end

  test "password should be present" do
    @user.password = @user.password_confirmation = " "
    assert !@user.valid?
  end

  test "password should be longer than 7" do
    @user.password = @user.password_confirmation = "abc123"
    assert !@user.valid?
  end

  test "authenticated? should return false for a user with nil digest" do
    assert_not @user.authenticated?(:remember,'')
  end



end
