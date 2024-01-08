<!-- <?php
        $test_name = filter_input(INPUT_POST, 'name');
        $test_email = filter_input(INPUT_POST, 'email');
        ?>

<p>Contect:<?php echo $test_name ?></p>
<p>アドレス:<?php echo $test_name ?></p> -->

<!DOCTYPE html>
<html lang="ja">
<?php include './common/head.php'; ?>

<body>
    <div class="from-area container-sm mt-5">
        <h1>Webフォーム入力</h1>
        <from action="receive.php" method="post" class="mt -4">
            <div class="md -3">
                <label for="my_mame" class="from-label">名前</label>
                <input type="text" class="form-control" name="my_name">
            </div>
            <div class="mb-3">
                <label for="my_age" class="from-label">年齢</label>
                <input type="number" class="from-comtrol" name="my_age">
            </div>
            <div><label for="email" class="form-label">メールアドレス</label>
                <input type="text" class="form-control" name="email" value="">
            </div>
            <div class="mb-3">
                <input type="submit" class="btn btn-primary" value="データ送信">
            </div>
        </from>
    </div>
</body>

</html>