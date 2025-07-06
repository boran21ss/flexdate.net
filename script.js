const botName = "FlörtFlexBot";
const botReplies = [
  "Hmm, ilginçmiş! Devam et biraz daha anlat.",
  "Sen çok karizmatiksin ya, devam et!",
  "Gerçekten mi? Bu çok havalı!",
  "Ben böyle esprili biri görmedim!",
  "Bu arada seni biraz kıskandım şimdi.",
  "Seninle sohbet etmek süper keyifli!",
  "Daha neler yapıyorsun? Anlat bakalım.",
  "Benim de favori müzik grubum K-pop, senin ne?",
  "Hmm, bu biraz zor bir soru, biraz düşünmem lazım.",
  "Eğer ben bir insan olsaydım kesin senden flört ederdim."
];

messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = messageInput.value.trim();
  if(text.length === 0) return;

  // Kullanıcı mesajı ekle
  messages.push({sender: userData.username, text});
  localStorage.setItem(msgKey, JSON.stringify(messages));
  renderMessages();
  messageInput.value = '';
  
  // Bot cevap verir gibi bekle
  setTimeout(() => {
    const botReply = botReplies[Math.floor(Math.random() * botReplies.length)];
    messages.push({sender: botName, text: botReply});
    localStorage.setItem(msgKey, JSON.stringify(messages));
    renderMessages();
  }, 1000 + Math.random() * 2000); // 1-3 saniye rastgele delay
});
