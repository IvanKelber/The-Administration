require 'test_helper'

class KeywordTest < ActiveSupport::TestCase

  def setup
    @keyword = keywords(:messy)
  end

  test "keywords are unique" do
    keyword2 = @keyword.dup
    keyword2.word.upcase!
    @keyword.save
    assert !keyword2.valid?
  end

  test "keywords are lowercase" do
    @keyword.word = "MESSY"
    @keyword.save
    assert @keyword.reload.word == "messy"
  end


end
