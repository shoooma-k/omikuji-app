require "test_helper"

class OmikujiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get omikuji_index_url
    assert_response :success
  end
end
