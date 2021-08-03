<?php
   include ('connections.php'); 

  if(isset($_POST['submit_btn'])){ 

        $name = $_POST['name']; 
        $phone = $_POST['phone'];
        $parentPhone = $_POST['parentPhone'];
        $facebook = $_POST['facebook'];
        $age = $_POST['age'];
        $school = $_POST['school'];
        $address = $_POST['address'];
        $education = $_POST['education'];
        $knowing = $_POST['knowing'];
        
     //check if empty   
        if(empty($name)|| empty($address)||empty($parentPhone)||empty($phone)|| empty($school)||empty($age)|| empty($facebook)||empty($education))
                echo "<script> alert('You Do not set all the inputs'); window.location.href='';</script>";

         $stmt_phone = $conn->prepare("SELECT phone FROM junior WHERE phone= ? ;");
         $stmt_acc = $conn->prepare("SELECT facebook_acc FROM junior WHERE facebook_acc= ? ;"); 

         if (!($stmt_phone && $stmt_acc)){
          echo "<script> alert('SQL FAILED P1'); window.location.href='index.html';</script>";
         }
     
          $stmt_phone->bind_param("s" , $phone);
          $stmt_phone->execute();
          $result_phone = mysqli_stmt_get_result($stmt_phone);

          $stmt_acc->bind_param("s" , $facebook);
          $stmt_acc->execute();
          $result_acc = mysqli_stmt_get_result($stmt_acc);
         //check if phone or facebook account has been already exists.
          if($result_phone ->num_rows != 0)
               echo "<script> alert('Oops! This phone already exists!');window.location.href = 'https://www.stp-org.com/'; </script>";
          elseif($result_acc ->num_rows != 0)   
               echo "<script> alert('Oops! This account already exists!');window.location.href = 'https://www.stp-org.com/'; </script>";
          else{

               $stmt_insert = $conn->prepare("INSERT into junior (name,phone,parent_phone,facebook_acc,age,school,address,educational_adminstration,know_stp) VALUES(?,?,?,?,?,?,?,?,?);");
               if (!$stmt_insert){
                    echo "<script> alert('sql failed p_ins');window.location.href = 'https://www.stp-org.com/'; </script>";
               }
              $stmt_insert->bind_param("ssssissss",$name,$phone,$parentPhone,$facebook,$age,$school, $address, $education,$knowing);
              if ($stmt_insert->execute()){
               echo "<script> alert('thanks for submittion, see you soon');window.location.href = 'https://www.stp-org.com/'; </script>";
              }
              else{
               echo "<script> alert('Oops!, please check your info again');window.location.href = './'; </script>";
              }

          }
   

        
        $conn->close();  
    }


 