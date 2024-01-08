<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['my_name'], ENT_QUOTES);
    $age = (int)$_POST['my_age'];
    $email = htmlspecialchars($_POST['my_email'], ENT_QUOTES);
}
?>
<!DOCTYPE html>
<html lang="ja">

<?php include '/common/head.php'; ?>

<body>
    <div class="container-sm mt-5">
        <h1>データ確認画面</h1>
        <form action="compleat.php" method="post">
            <input type="hidden" name="my=name" value="<?php echo $name ?>">
            <input type="hidden" name="my=age" value="<?php echo $age ?>">
            <table class="table">
                <tboby>
                    <tr>
                        <th scope="row">名前</th>
                        <td><?php echo $age ?>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">名前</th>
                        <td><?php echo $age ?></td>
                    </tr>
                    <tr>
                        <th scope="row">メールアドレス</th>
                        <td><?php echo $echo ?></td>
                    </tr>
                </tboby>
            </table>
            <div class="mx-auto">
                <input type="submit" class="btn btn-primary" value="完了">
            </div>
        </form>
</body>

</html>