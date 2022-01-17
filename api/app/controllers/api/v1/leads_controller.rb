class Api::V1::LeadsController < ApplicationController
    def create
        @lead = Lead.new(
            first_name: params[:first_name],
            last_name: params[:last_name],
            company_name: params[:company_name]
        )
        if @lead.save
            render json: @lead
        else
            render error: { error: "unable to create lead" }, status: 400
        end
    end
end
