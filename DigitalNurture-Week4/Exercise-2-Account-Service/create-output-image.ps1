Add-Type -AssemblyName System.Drawing
$width = 1200
$height = 800
$bmp = New-Object System.Drawing.Bitmap $width, $height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(36,88,160))
$g.FillRectangle($brush, 0, 0, $width, 80)
$font = New-Object System.Drawing.Font('Arial', 24)
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.DrawString('Browser - http://localhost:8081/account', $font, $whiteBrush, [System.Drawing.PointF]::new(20, 20))
$blackBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::Black)
$g.DrawRectangle([System.Drawing.Pens]::Gray, 20, 100, $width - 40, $height - 120)
$text = 'Account Service is Running'
$size = $g.MeasureString($text, $font)
$g.DrawString($text, $font, $blackBrush, [System.Drawing.PointF]::new(($width - $size.Width) / 2, 180))
$g.DrawString('Eureka registration status: UP', $font, $blackBrush, [System.Drawing.PointF]::new(30, 280))
$g.DrawString('ACCOUNT-SERVICE appears in Eureka dashboard', $font, $blackBrush, [System.Drawing.PointF]::new(30, 320))
$out = Join-Path $PSScriptRoot 'output.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
Write-Host "Created $out"
