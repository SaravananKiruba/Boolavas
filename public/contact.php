<?php
header('Content-Type: application/json');

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

$name        = htmlspecialchars(trim($data['name']        ?? ''), ENT_QUOTES, 'UTF-8');
$email       = filter_var(trim($data['email']       ?? ''), FILTER_VALIDATE_EMAIL);
$product     = htmlspecialchars(trim($data['product']     ?? ''), ENT_QUOTES, 'UTF-8');
$enquiryType = htmlspecialchars(trim($data['enquiryType'] ?? ''), ENT_QUOTES, 'UTF-8');
$message     = htmlspecialchars(trim($data['message']     ?? ''), ENT_QUOTES, 'UTF-8');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$to      = 'appsupport@boolavas.in';
$subject = "[$product] $enquiryType — from $name";
$body    = "Name:         $name\n"
         . "Email:        $email\n"
         . "Product:      $product\n"
         . "Enquiry Type: $enquiryType\n\n"
         . "Message:\n$message";

$headers  = "From: appsupport@boolavas.in\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
