import { makeAutoObservable, makeObservable, observable, runInAction} from "mobx";

import agent from "../api/agent";
import { Activity, NewActivity } from "../model/Activity";

export default class ActivityStore{
    activities:Activity[]=[];
    selectedActivity:Activity|null=null;
    editMode=false;
    activityViewMode=false;
    loading=false;
    loadingInitial=false;
    createForm=false;
    constructor(){
       makeAutoObservable(this);
    }

    loadActivities=async()=>{
        this.setLoadingInitial(true)
        try{
            runInAction(async()=>{
                this.activities=await agent.Activities.list();
                this.setLoadingInitial(false)
            })
            ;
        }
        catch(err){
            console.log(err);
            runInAction(()=>{
                this.setLoadingInitial(false)
            })
           
        }
    }

    setLoadingInitial=(state:boolean)=>{
        this.loadingInitial=state;
    }

    selectActivity=async (id:string)=>{
       await agent.Activities.details(id).then(res=>{this.selectedActivity=res; this.activityViewMode=true});
       this.editMode=false;
    }
    updateActivity=async(activity:Activity)=>{
        await agent.Activities.update(activity);
        this.loadActivities()
        this.selectedActivity=null;
        this.editMode=false;

    }
    createActivity=async(activity:Activity)=>{
        const newActivity:NewActivity=activity;
        delete newActivity.id;
        await agent.Activities.create(newActivity);
        this.loadActivities()
    }
    deleteActivity=async(id:string)=>{
        await agent.Activities.delete(id);
        this.loadActivities()
    }
    cancelActivityView=()=>{
        this.selectedActivity=null;
    }
    setEditMode=()=>{
        this.editMode=true;
        this.activityViewMode=false;
    }
    cancelEditMode=()=>{
        this.editMode=false;
        this.selectedActivity=null;
    }
}