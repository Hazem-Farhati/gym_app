import { createSlice,nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'
const initialState= [
    { id:'1',title : 'Talel', 
    content : "Be Proud. Before diving into the practical gym tips for beginners, remember that the most important exercise catalyst is confidence.",
    date:sub(new Date(),{minutes:10}).toISOString(),
    reactions : {
        thumbsUp : 0 ,
        wow : 0 ,
        heart :0 ,
        rocker : 0,
        coffee : 0 
     }},
    
    { id:'2',title : 'Coach',
     content : "Nutritionally conscious shakes & smoothies, packed full of flavour. Carefully crafted elixirs with a powerful hit of goodness to leave you feeling energised & ready , Be Proud. Before diving into the practical gym tips for beginners, remember that the most important exercise catalyst is confidence.",

     date:sub(new Date(),{minutes:10}).toISOString(),
     reactions : {
        thumbsUp : 0 ,
        wow : 0 ,
        heart :0 ,
        rocker : 0,
        coffee : 0 
     }
    }

]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdd : {
            reducer(state,action){
            state.push(action.payload)
        },
        prepare(title,content,userId){
            return {
                payload : {
                    id:nanoid(),
                    title,
                    content,
                    date:new Date().toISOString(),
                    userId,
                    reactions : {
                        thumbsUp : 0 ,
                        wow : 0 ,
                        heart :0 ,
                        rocker : 0,
                        coffee : 0 
                     }
                }
            }
        }
    },
    reactionAdded(state,action){
        const { postId ,reaction} = action.payload 
        const existingPost = state.find(post =>post.id === postId)
        if (existingPost){
            existingPost.reactions[reaction]++
        }
    }
}
})
export const selectAllPosts = (state ) => state.posts;
export const {postAdd,reactionAdded} = postSlice.actions
export default postSlice.reducer