class ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def new
    @project = Project.new
    @project.tasks.build
  end

  def edit
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.new(params[:project])

    if @project.save
      flash[:notice] = "Project created."
      redirect_to(projects_url)
    else
      render :action => "new"
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update_attributes(params[:project])
      flash[:notice] = "Project updated."
      redirect_to(projects_url)
    else
      render :action => "edit"
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to(projects_url)
  end

end
