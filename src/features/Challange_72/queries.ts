import { message } from "antd"
import axios from "axios"
const baseUrl = 'https://a86d-196-203-236-174.ngrok-free.app/api/post'

export async function getAllBlogPosts() {
    try {
      const response = await axios.get(baseUrl)
      return response.data
    } catch (error) {
      message.error('Failed to get posts')
    }
  }
export async function createNewBlogPost(values : any) {
    try {
      const response = await axios.post(baseUrl , values)
      return response.data
    } catch (error) {
      message.error('Failed to create post')
    }
  }

  export async function DeleteBlogPost(postId : string) {
    try {
      const response = await axios.delete(`${baseUrl}/${postId}` )
      return response.data
    } catch (error) {
      message.error('Failed delete post')
    }
  }

  export async function UpdateBlogPost(values : any) {
    try {
      const response = await axios.patch(baseUrl , values)
      return response.data
    } catch (error) {
      message.error('Failed to update post !')
    }
  }
  