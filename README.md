# TradeLog Pro - FXトレード記録サービス

ブラウザだけで使えるシンプルなトレード記録ミニアプリです。`localStorage` に保存するため、セットアップ不要で動作します。

## 構造

```
/fx-tradeapp
  ├── index.html       # ランディングページ
  ├── app.html         # ミニアプリ（記録・一覧）
  ├── fx-lp.html       # FX土台構築LP（Fullpage.js縦フリック式）
  ├── admin.html       # 管理者画面
  ├── css/
  │   ├── style.css    # 共通スタイル
  │   └── lp-style.css # LP専用スタイル
  ├── js/
  │   ├── app.js       # アプリのロジック
  │   └── lp-main.js   # LP用スクリプト
  ├── images/          # 画像素材
  │   ├── decorations/
  │   ├── hero/
  │   └── icons/
  └── README.md
```

## 新規追加: FX土台構築LP (fx-lp.html)

Fullpage.jsを使用した縦フリック式ランディングページを追加しました。

### 特徴
- Fullpage.jsによるスムーズな縦スクロール体験
- レスポンシブデザイン（PC/タブレット/スマホ対応）
- フェードインアニメーション
- 固定CTAボタン（全画面表示）
- プログレッシブなコンテンツ構造

### 使用方法
1. `fx-lp.html` をブラウザで開く
2. スクロールまたはフリックで各セクションを閲覧
3. LINE登録CTAから導線へ誘導

### 技術スタック
- HTML5
- CSS3 (カスタム変数使用)
- JavaScript (Vanilla JS)
- Fullpage.js 4.0.20 (CDN)
- Noto Sans JP (Google Fonts)

### カスタマイズ
- LINE公式アカウントIDを置き換え: `@YOUR_LINE_ID` を検索して変更
- 画像素材を追加: `images/` フォルダに配置して参照を更新
- デザイン調整: `css/lp-style.css` のCSS変数を編集

## 使い方

1. `index.html` をブラウザで開きます。
2. 「ミニアプリを開く」ボタンから `app.html` に移動します。
3. フォームに入力して保存すると記録が一覧に追加されます。
4. データはブラウザの `localStorage` に保存されます（端末/ブラウザ単位）。

## 開発メモ

- 依存ライブラリなし（HTML/CSS/Vanilla JS）。
- データ永続化: `localStorage`（キー: `fx_trades_v1`）。
- 将来の拡張アイデア: CSVエクスポート、フィルタ/集計、チャート表示など。

## デプロイ方法

### GitHub + Cloudflare Pages推奨

1. **GitHubリポジトリ作成**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FX土台構築LP"
   git remote add origin https://github.com/YOUR_USERNAME/fx-lp.git
   git push -u origin main
   ```

2. **Cloudflare Pagesでデプロイ**
   - Cloudflareダッシュボードにログイン
   - Pages → Create a project
   - Connect to Git → GitHubリポジトリ選択
   - Build settings: None（静的サイト）
   - Deploy!

3. **カスタムドメイン設定（任意）**
   - Cloudflare Pages → Custom domains
   - `yourdomain.com` を追加

### その他のホスティングオプション

- **Netlify**: ドラッグ&ドロップでデプロイ可能
- **Vercel**: GitHub連携で自動デプロイ
- **GitHub Pages**: 無料ホスティング
- **S3 + CloudFront**: AWS環境でのホスティング

## デプロイ前のチェックリスト

- [ ] LINE公式アカウントIDを `@YOUR_LINE_ID` から実際のIDに変更
- [ ] OGP画像 (`images/ogp-image.jpg`) を作成・配置
- [ ] ファビコン (`favicon.ico`) を作成・配置
- [ ] 実画像を `images/` フォルダに配置（現在はCSSプレースホルダー）
- [ ] ブラウザでの動作確認（Chrome/Safari/Firefox）
- [ ] レスポンシブ表示確認（PC/タブレット/スマホ）
- [ ] パフォーマンステスト（PageSpeed Insights）

## ライセンス

MIT License - 自由にご利用ください。
