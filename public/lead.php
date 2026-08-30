<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://boolavas.in');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

$name    = htmlspecialchars(trim($data['name']    ?? ''), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($data['email']   ?? ''), FILTER_VALIDATE_EMAIL);
$product = htmlspecialchars(trim($data['product'] ?? ''), ENT_QUOTES, 'UTF-8');

if (!$name || !$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Name and email are required']);
    exit;
}

$to      = 'contact@boolavas.in';
$subject = "New lead: $name is checking out $product";
$body    = "A visitor just opened $product.\n\n"
         . "Name:    $name\n"
         . "Email:   $email\n"
         . "Product: $product\n";

$headers  = "From: noreply@boolavas.in\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $body, $headers);

// Always return success — don't block the user on mail failures
echo json_encode(['success' => true]);
