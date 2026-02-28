require "test_helper"

class OmikujisControllerTest < ActionDispatch::IntegrationTest
  test "should get select" do
    get omikujis_select_url
    assert_response :success
  end

  test "should get result" do
    get omikujis_result_url
    assert_response :success
  end
end
