class Api::V1::ItemsController < Api::V1::BaseController
  before_action :find_item, only: [:show, :update]

  def index
    respond_with Item.all
  end

  def show
    respond_with @item, json: @item
  end

  def create
    respond_with :api, :v1, Item.create(iteam_params)
  end

  def update
    @item.update_attributes iteam_params
    respond_with @item, json: @item
  end

  def destroy
    respond_with Item.destroy params[:id]
  end

  private

  def find_item
    @item = Item.find params[:id]
  end
end
