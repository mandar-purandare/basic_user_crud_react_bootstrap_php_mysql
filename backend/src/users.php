<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$db_name = "pet_projects";
$username = "root";
$password = "";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die(json_encode(["error" => "Connection failed: " . $e->getMessage()]));
}

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case "GET":
        fetchUsers($pdo);
        break;
    case "POST":
        createUser($pdo);
        break;
    case "PUT":
        updateUser($pdo);
        break;
    case "DELETE":
        deleteUser($pdo);
        break;
    default:
        echo json_encode(["error" => "Invalid request method"]);
        break;
}

// ✅ FETCH ALL USERS
function fetchUsers($pdo) {
    if(isset($_GET['id'])){
        $sql = "SELECT id, name, email, dob, password, created_at, created_by, updated_at, updated_by FROM users WHERE id = ?";
        $stmt = $pdo->prepare($sql);
        if($stmt->execute([$_GET['id']])){
            echo json_encode(["success" => true, "message" => "User fetched successfully", "data" => $stmt->fetchAll(PDO::FETCH_ASSOC)]);
            return;
        }
    }
    $stmt = $pdo->query("SELECT id, name, email, dob, created_at, created_by, updated_at, updated_by FROM users");
    echo json_encode(["success" => true, "data" => $stmt->fetchAll(PDO::FETCH_ASSOC), "message" => "Users fetched successfully"]);
}

// ✅ CREATE USER (POST)
function createUser($pdo) {
    $data = json_decode(file_get_contents("php://input"), true);
    if (!isset($data["name"], $data["email"], $data["password"], $data["dob"],$data["created_by"])) {
        echo json_encode(["success" => false, "error" => "Missing required fields"]);
        return;
    }

    $sql = "INSERT INTO users (name, email, password, dob ,created_at, created_by) VALUES (?, ?, ?, ?, NOW(), ?)";
    $stmt = $pdo->prepare($sql);
    $hashedPassword = password_hash($data["password"], PASSWORD_DEFAULT);
    
    if ($stmt->execute([$data["name"], $data["email"], $hashedPassword, $data["dob"],$data["created_by"]])) {
        echo json_encode(["success" => true, "message" => "User created successfully"]);
    } else {
        echo json_encode(["success" => false, "error" => "Failed to create user"]);
    }
}

// ✅ UPDATE USER (PUT)
function updateUser($pdo) {
    $data = json_decode(file_get_contents("php://input"), true);
    if (!isset($data["id"], $data["name"], $data["email"], $data["password"], $data["dob"], $data["updated_by"])) {
        echo json_encode(["error" => "Missing required fields"]);
        return;
    }

    $sql = "UPDATE users SET name = ?, email = ?, password = ?, dob = ?, updated_at = NOW(), updated_by = ? WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $hashedPassword = password_hash($data["password"], PASSWORD_DEFAULT);
    
    if ($stmt->execute([$data["name"], $data["email"], $hashedPassword, $data["dob"], $data["updated_by"], $data["id"]])) {
        echo json_encode(["success" => true, "message" => "User updated successfully"]);
    } else {
        echo json_encode(["success" => false,"error" => "Failed to update user"]);
    }
}

// ✅ DELETE USER (DELETE)
function deleteUser($pdo) {
    
    if (!isset($_GET['id'])) {
        echo json_encode(["error" => "Missing user ID"]);
        return;
    }

    $sql = "DELETE FROM users WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    
    if ($stmt->execute([$_GET["id"]])) {
        echo json_encode(["success" => true,"message" => "User deleted successfully"]);
    } else {
        echo json_encode(["success" => false,"error" => "Failed to delete user"]);
    }
}
?>
