require 'test_helper'

class ComponentTest < ActiveSupport::TestCase

  def setup
    @component = components(:chug)
  end

  test "is valid" do
    assert @component.valid?
  end

  test "name presence" do
    @component.name = "   "
    assert !@component.valid?
  end

  test "name not too long" do
    @component.name = "a" * 51
    assert !@component.valid?
  end

  test "description presence" do
    @component.description = "   "
    assert !@component.valid?
  end

  test "description not too long" do
    @component.description = "a" * 10001
    assert !@component.valid?
  end

  test "category presence" do
    @component.category = " "
    assert !@component.valid?
  end

  test "valid category accepted" do
    invalid_categories = ["Alcohol","Physical","Puzzle"]
    invalid_categories.each do |category|
      @component.category = category
      assert @component.valid?, "Category: #{category}"
    end
  end

  test "invalid category rejected" do
    invalid_categories = ["alcohol","physical","puzzle","something else"]
    invalid_categories.each do |category|
      @component.category = category
      assert !@component.valid?
    end
  end

  test "min_teams valid" do
    @component.min_teams = nil
    assert !@component.valid?
    @component.min_teams = 0
    assert !@component.valid?
    @component.min_teams = 5
    assert !@component.valid?
  end

  test "max_teams valid" do
    @component.max_teams = nil
    assert !@component.valid?
    @component.max_teams = 0
    assert !@component.valid?
    @component.max_teams = 5
    assert !@component.valid?
  end

  test "max_teams greater than or equal to min_teams" do
    @component.min_teams = 4
    @component.max_teams = 1
    assert !@component.valid?
    @component.max_teams = @component.min_teams
    assert @component.valid?
  end

end
