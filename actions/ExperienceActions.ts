'use server'

export async function getExperienceById(id:string){
  try {
    console.log('use server:',id);
    return {
      data:id
    }
  } catch (error:any) {
    console.log(error?.message || error);
    return {
      error: true,
      message: error?.message || error
    }
  }
  
}