<?php
try {
    $pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=mindspace', 'root', 'lika01mayUss');
    echo "PASS_WITH_PASSWORD\n";
} catch (PDOException $e) {
    echo "PASS_WITH_PASSWORD_ERR: " . $e->getMessage() . "\n";
}
try {
    $pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=mindspace', 'root', '');
    echo "PASS_WITHOUT_PASSWORD\n";
} catch (PDOException $e) {
    echo "PASS_WITHOUT_PASSWORD_ERR: " . $e->getMessage() . "\n";
}
try {
    echo implode(',', PDO::getAvailableDrivers()) . "\n";
} catch (Exception $e) {
    echo "DRIVERS_ERR: " . $e->getMessage() . "\n";
}
