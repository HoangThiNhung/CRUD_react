class Api::V1::ItemsController < Api::V1::BaseController
  # before_action :find_item, only: [:show, :update]

  def index
    respond_with Item.all.order(id: :desc)
  end

  def show
    respond_with @item, json: @item
  end

  def create
    respond_with :api, :v1, Item.create(item_params)
  end

  def update
    item = Item.find params[:id]
    item.update_attributes(item_params)
    respond_with item, json: item
  end

  def destroy
    respond_with Item.destroy params[:id]
  end

  private

  def item_params
    params.require(:item).permit(:id, :name, :description)
  end

  def find_item
    @item = Item.find params[:id]
  end
end
