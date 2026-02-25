require "test_helper"

class OmikujisControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get omikujis_index_url
    assert_response :success
  end

  test "should get show" do
    get omikujis_show_url
    assert_response :success
  end
end
