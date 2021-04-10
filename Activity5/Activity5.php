<?php
echo '<!DOCTYPE HTML>';
echo '<html>';
echo '<head>';
echo '<style>';
echo '.error {color: #FF0000;}';
echo '</style>';
echo '</head>';
echo '<body>';
echo '';
echo '<?php';
echo '// define variables and set to empty values';
echo '$nameErr = $emailErr = $genderErr = $websiteErr = "";';
echo '$name = $email = $gender = $comment = $website = "";';
echo '';
echo 'if ($_SERVER["REQUEST_METHOD"] == "POST") {';
echo 'if (empty($_POST["name"])) {';
echo '$nameErr = "Name is required";';
echo '} else {';
echo '$name = test_input($_POST["name"]);';
echo '}';
echo '';
echo 'if (empty($_POST["email"])) {';
echo '$emailErr = "Email is required";';
echo '} else {';
echo '$email = test_input($_POST["email"]);';
echo '}';
echo '';
echo 'if (empty($_POST["website"])) {';
echo '$website = "";';
echo '} else {';
echo '$website = test_input($_POST["website"]);';
echo '}';
echo '';
echo 'if (empty($_POST["comment"])) {';
echo '$comment = "";';
echo '} else {';
echo '$comment = test_input($_POST["comment"]);';
echo '}';
echo '';
echo 'if (empty($_POST["gender"])) {';
echo '$genderErr = "Gender is required";';
echo '} else {';
echo '$gender = test_input($_POST["gender"]);';
echo '}';
echo '}';
echo '';
echo 'function test_input($data) {';
echo '$data = trim($data);';
echo '$data = stripslashes($data);';
echo '$data = htmlspecialchars($data);';
echo 'return $data;';
echo '}';
echo '?>';
echo '';
echo '<h2>PHP Form Validation Example</h2>';
echo '<p><span class="error">* required field</span></p>';
echo '<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">';
echo 'Name: <input type="text" name="name">';
echo '<span class="error">* <?php echo $nameErr;?></span>';
echo '<br><br>';
echo 'E-mail: <input type="text" name="email">';
echo '<span class="error">* <?php echo $emailErr;?></span>';
echo '<br><br>';
echo 'Website: <input type="text" name="website">';
echo '<span class="error"><?php echo $websiteErr;?></span>';
echo '<br><br>';
echo 'Comment: <textarea name="comment" rows="5" cols="40"></textarea>';
echo '<br><br>';
echo 'Gender:';
echo '<input type="radio" name="gender" value="female">Female';
echo '<input type="radio" name="gender" value="male">Male';
echo '<input type="radio" name="gender" value="other">Other';
echo '<span class="error">* <?php echo $genderErr;?></span>';
echo '<br><br>';
echo '<input type="submit" name="submit" value="Submit">';
echo '</form>';
echo '';
echo '<?php';
echo 'echo "<h2>Your Input:</h2>";';
echo 'echo $name;';
echo 'echo "<br>";';
echo 'echo $email;';
echo 'echo "<br>";';
echo 'echo $website;';
echo 'echo "<br>";';
echo 'echo $comment;';
echo 'echo "<br>";';
echo 'echo $gender;';
echo '?>';
echo '';
echo '</body>';
echo '</html>';
?>