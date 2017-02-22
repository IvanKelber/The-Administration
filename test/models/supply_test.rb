require 'test_helper'

class SupplyTest < ActiveSupport::TestCase

  def setup
    @can = supplies(:can)
  end

  test "supplies are unique" do
    can2 = @can.dup
    can2.item.upcase!
    @can.save
    assert !can2.valid?
  end

  test "supplies are lowercase" do
    @can.item = "CAN"
    @can.save
    assert @can.reload.item == "can"
  end

  
end
