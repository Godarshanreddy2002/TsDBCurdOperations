import supabase from './supabase.ts';

interface Student {
  eid: number;
  ename: string;
  age: number;
  marks: number;
}

// 1. Create: Insert a new student
async function insertStudentData(student: Student) {
  const { data: insertedData, error } = await supabase
    .from('Employee') // Change to 'STU' if that's the table name
    .insert([student]); // Wrap the student object in an array

  if (error) {
    console.log("Something went wrong!!", error);
  } else {
    console.log("Inserted student data successfully:", insertedData);
  }
}

// 2. Read: Get a student by eid
async function getStudentDataById(eid: number) {
  const { data, error } = await supabase
    .from('Employee') // Change to 'STU' if that's the table name
    .select('*')
    .eq('eid', eid);

  if (error) {
    console.log("Error fetching student data:", error);
  } else if (data && data.length > 0) {
    console.log("Fetched student data:", data);
  } else {
    console.log("No student found with eid:", eid);
  }
}


// 4. Delete: Delete a student by eid
async function deleteStudentData(eid: number) {
  const { data, error } = await supabase
    .from('Employee') // Change to 'STU' if that's the table name
    .delete()
    .eq('eid', eid);

  if (error) {
    console.log("Error deleting student data:", error);
  } else {
    console.log("Deleted student data successfully:", data);
  }
}



async function updateEmp(student:Student) 
{
  const {data,error}=await supabase
  .from('Employee')
  .update(student)
  .eq('eid', student.eid)
  .select('*')

  if(error)
  {
    console.log("Student is not updated!",error)
  }
  else{
    console.log("Student is update successfully",data)
  }
  
}


let isExit=false;


do{
  try {
   

    console.log(" welcome")
    // console.log("Enter your choice:")
    console.log("1.Insert Employee")
    console.log("2.Delete Empployee")
    console.log("3. update Employee By id")
    console.log("4.Retrieve Employee Data")
    
    console.log("5.exit")
    const choice = parseInt(prompt("Enter the new marks: ")||"" );

    switch(choice)
    {
      case 1: {
       const eid = parseInt(prompt("Enter the Student ID (eid) to update: ") || '');
      const ename = prompt("Enter the new name (ename): ") || '';
      const age = parseInt(prompt("Enter the new age: ") || '');
      const marks = parseInt(prompt("Enter the new marks: ") || '');
      const stu: Student = {
        eid,
        ename,
        age,
        marks
      };
       await insertStudentData(stu)
      break
    }
      case 2:
      {
        const eid = parseInt(prompt("Enter the Student ID (eid) to update: ") || '');

      await deleteStudentData(eid)
      break;
      }
      case 3:
        {
          const eid = parseInt(prompt("Enter the Student ID (eid) to update: ") || '');
          const ename = prompt("Enter the new name (ename): ") || '';
          const age = parseInt(prompt("Enter the new age: ") || '');
          const marks = parseInt(prompt("Enter the new marks: ") || '');
          const stu: Student = {
            eid,
            ename,
            age,
            marks
          };
          await updateEmp(stu)
          break;
        }
        case 4:
          {
            const eid = parseInt(prompt("Enter the Student ID (eid) to update: ") || '');
            await deleteStudentData(eid)
            break;
          }
          case 5:
            {
              isExit=true
              break
            }

      default:
        console.log("wrong input")

    }

    

  } catch (error) {
    console.log("Error:", error);
  }
}while(!isExit)
